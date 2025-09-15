"use client";

import { useState, useRef, useEffect, useCallback } from 'react';
import { useUser } from '@clerk/nextjs';
import { motion, AnimatePresence } from 'framer-motion';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { 
    ArrowDownTrayIcon, 
    TrashIcon, 
    ArrowUturnLeftIcon, 
    ArrowUturnRightIcon,
    PlusIcon,
    PaintBrushIcon
} from '@heroicons/react/24/outline'; // Using outline icons for a lighter feel

// --- Reusable Components ---

// UPDATED: Added new components for Skills, Experience, Education, and Projects
const componentMap = {
    Header: ({ fullName, title }) => (
        <div className="p-4 text-center select-none w-full">
            <h1 className="text-4xl font-bold text-slate-800">{fullName || "Your Name"}</h1>
            <p className="text-xl text-indigo-500 font-medium">{title || "Your Title"}</p>
        </div>
    ),
    ProfilePhoto: ({ src }) => (
        <img src={src || 'https://via.placeholder.com/150'} alt="Profile" className="w-36 h-36 rounded-full object-cover ring-4 ring-white ring-offset-2 ring-offset-transparent shadow-lg select-none" />
    ),
    Bio: ({ text }) => (
        <p className="p-4 text-center text-slate-600 select-none w-full max-w-lg leading-relaxed">{text || "Your bio..."}</p>
    ),
    Skills: ({ skills }) => (
        <div className="p-4 w-full max-w-md">
            <h3 className="text-2xl font-bold mb-3 text-slate-700 text-center">Skills</h3>
            <div className="flex flex-wrap gap-2 justify-center">
                {(skills || []).map(skill => <span key={skill.name} className="bg-slate-200 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">{skill.name}</span>)}
            </div>
        </div>
    ),
    Experience: ({ experience }) => (
        <div className="p-4 w-full max-w-md">
             <h3 className="text-2xl font-bold mb-4 text-slate-700">Experience</h3>
             <div className="space-y-4">
                {(experience || []).map((exp, i) => (
                    <div key={i}>
                        <p className="font-bold text-slate-800">{exp.role}</p>
                        <p className="text-sm text-slate-600">{exp.company} | {exp.startDate} - {exp.endDate}</p>
                    </div>
                ))}
             </div>
        </div>
    ),
    Education: ({ education }) => (
         <div className="p-4 w-full max-w-md">
             <h3 className="text-2xl font-bold mb-4 text-slate-700">Education</h3>
             <div className="space-y-4">
                {(education || []).map((edu, i) => (
                    <div key={i}>
                        <p className="font-bold text-slate-800">{edu.degree}</p>
                        <p className="text-sm text-slate-600">{edu.instituteName}</p>
                    </div>
                ))}
             </div>
        </div>
    ),
    Projects: ({ projects }) => (
         <div className="p-4 w-full max-w-md">
             <h3 className="text-2xl font-bold mb-4 text-slate-700">Projects</h3>
             <div className="space-y-4">
                {(projects || []).map((proj, i) => (
                    <div key={i} className="p-3 bg-slate-50 rounded-lg">
                        <p className="font-bold text-slate-800">{proj.name}</p>
                        <p className="text-sm text-slate-600">{proj.description}</p>
                    </div>
                ))}
             </div>
        </div>
    ),
};

// UPDATED: Inspector now handles complex list data gracefully
const Inspector = ({ item, onUpdate, onDelete }) => {
    if (!item) return null;
    const handlePropChange = (propName, value) => {
        onUpdate(item.id, { ...item.props, [propName]: value });
    };
    return (
        <aside className="w-80 bg-white shadow-2xl flex flex-col h-full border-l border-slate-200/80">
            <div className="flex-shrink-0 p-4 flex items-center gap-3 border-b border-slate-200">
                <PaintBrushIcon className="w-6 h-6 text-indigo-500" />
                <h3 className="text-lg font-bold text-slate-800">Edit {item.componentType}</h3>
            </div>
            <div className="flex-grow p-6 space-y-5 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-slate-100">
                {Object.keys(item.props).map(propName => {
                    // Don't render an input for complex array data
                    if (Array.isArray(item.props[propName])) {
                        return (
                            <div key={propName}>
                                <label className="text-sm font-medium text-slate-500 capitalize block mb-2">{propName}</label>
                                <div className="p-2.5 text-xs text-slate-500 bg-slate-100 rounded-md border border-slate-300">
                                    Edit this section in the main Dashboard.
                                </div>
                            </div>
                        )
                    }
                    return (
                        <div key={propName}>
                            <label className="text-sm font-medium text-slate-500 capitalize block mb-2">{propName}</label>
                            <input
                                type={propName.includes('src') ? 'url' : 'text'}
                                value={item.props[propName]}
                                onChange={(e) => handlePropChange(propName, e.target.value)}
                                className="w-full mt-1 p-2.5 bg-slate-100 text-slate-900 placeholder:text-slate-400 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow"
                            />
                        </div>
                    );
                })}
            </div>
            <div className="flex-shrink-0 p-4 border-t border-slate-200">
                <button onClick={() => onDelete(item.id)} className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"><TrashIcon className="w-5 h-5" />Delete Component</button>
            </div>
        </aside>
    );
};


// --- Reusable Action Button ---
const ActionButton = ({ onClick, disabled, children, variant = 'secondary', className = '' }) => {
    const baseClasses = "flex items-center justify-center gap-2 px-4 py-2 font-semibold rounded-lg shadow-sm transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-950";
    const variants = {
        primary: 'bg-indigo-600 text-white hover:bg-indigo-500 focus:ring-indigo-500',
        secondary: 'bg-slate-700/80 border border-slate-600/90 text-slate-200 hover:bg-slate-700 focus:ring-slate-500',
        danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500',
    };
    return (<button onClick={onClick} disabled={disabled} className={`${baseClasses} ${variants[variant]} ${className}`}>{children}</button>);
};

// --- Main Editor Component ---
export default function EditorPage() {
    const { user } = useUser();
    const [canvasItems, setCanvasItems] = useState([]);
    const [selectedItemId, setSelectedItemId] = useState(null);
    const [userData, setUserData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const canvasRef = useRef();
    const [history, setHistory] = useState([[]]);
    const [historyIndex, setHistoryIndex] = useState(0);

    useEffect(() => {
        if (!user) return;
        const fetchProfile = async () => {
            setIsLoading(true);
            try {
                const res = await fetch("/api/dashboard");
                if (res.ok) {
                    const data = await res.json();
                    setUserData(data);
                    const initialLayout = data.editorLayout && data.editorLayout.length > 0 ? data.editorLayout : [
                        { id: Date.now() + 1, componentType: 'Header', props: { fullName: data.fullName || '', title: data.title || '' }, x: 200, y: 50, width: 400, height: 100 },
                        { id: Date.now() + 2, componentType: 'ProfilePhoto', props: { src: data.profilePhoto || '' }, x: 328, y: 150, width: 144, height: 144 },
                    ];
                    setCanvasItems(initialLayout);
                    setHistory([initialLayout]);
                    setHistoryIndex(0);
                }
            } catch (error) { console.error("Failed to fetch data", error); }
            finally { setIsLoading(false); }
        };
        fetchProfile();
    }, [user]);

    const updateCanvasItems = useCallback((newItems) => {
        const newHistory = [...history.slice(0, historyIndex + 1), newItems];
        setHistory(newHistory);
        setHistoryIndex(newHistory.length - 1);
        setCanvasItems(newItems);
    }, [history, historyIndex]);
    
    const handleUpdatePosition = (id, info) => {
        const newItems = canvasItems.map(item => item.id === id ? { ...item, x: item.x + info.offset.x, y: item.y + info.offset.y } : item);
        updateCanvasItems(newItems);
    };

    const handleAddItem = (type) => {
        const defaultProps = {
            Header: { fullName: userData?.fullName || 'Full Name', title: userData?.title || 'Title' },
            ProfilePhoto: { src: userData?.profilePhoto || '' },
            Bio: { text: userData?.bio || 'Your bio here...' },
            // NEW: Default props for the new components
            Skills: { skills: userData?.skills || [] },
            Experience: { experience: userData?.experience || [] },
            Education: { education: userData?.education || [] },
            Projects: { projects: userData?.projects || [] },
        };
        const newItem = {
            id: Date.now(), componentType: type, props: defaultProps[type], x: 50, y: 50, width: 400, height: 'auto'
        };
        updateCanvasItems([...canvasItems, newItem]);
    };

    const handleUpdateItemProps = (id, newProps) => {
        const newItems = canvasItems.map(item => {
            if (item.id === id) {
                if (item.componentType === 'Header') setUserData(d => ({ ...d, fullName: newProps.fullName, title: newProps.title }));
                else if (item.componentType === 'ProfilePhoto') setUserData(d => ({ ...d, profilePhoto: newProps.src }));
                else if (item.componentType === 'Bio') setUserData(d => ({ ...d, bio: newProps.text }));
                return { ...item, props: newProps };
            }
            return item;
        });
        updateCanvasItems(newItems);
    };

    const handleDeleteItem = (id) => {
        updateCanvasItems(canvasItems.filter(item => item.id !== id));
        setSelectedItemId(null);
    };

    const handleSaveLayout = async () => {
        try {
            const res = await fetch("/api/dashboard", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...userData, editorLayout: canvasItems }) });
            if (!res.ok) throw new Error("Failed to save layout");
            alert("Layout saved successfully!");
        } catch (error) { console.error(error); alert("Error saving layout."); }
    };
    
    const handleUndo = () => {
        if (historyIndex > 0) {
            const newIndex = historyIndex - 1;
            setHistoryIndex(newIndex);
            setCanvasItems(history[newIndex]);
        }
    };
    const handleRedo = () => {
        if (historyIndex < history.length - 1) {
            const newIndex = historyIndex + 1;
            setHistoryIndex(newIndex);
            setCanvasItems(history[newIndex]);
        }
    };

    const exportToPdf = () => {
        setSelectedItemId(null);
        setTimeout(() => {
            const canvasElement = canvasRef.current;
            if (!canvasElement) return;
            html2canvas(canvasElement, { scale: 2 }).then(canvas => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF({ orientation: 'portrait', unit: 'pt', format: 'a4' });
                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
                pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
                pdf.save("portfolio.pdf");
            });
        }, 100);
    };

    if (isLoading) {
        return <div className="flex justify-center items-center h-screen bg-slate-900 text-white">Loading Editor...</div>;
    }

    const selectedItem = canvasItems.find(item => item.id === selectedItemId);

    return (
        <div className="flex h-screen bg-slate-950 text-white font-sans overflow-hidden">
            <aside className="w-64 bg-slate-900 p-6 flex flex-col gap-6 border-r border-slate-800">
                <h2 className="text-xl font-bold text-white">Toolbox</h2>
                <div className="space-y-3">
                    {/* NEW: Buttons for all new components */}
                    <ActionButton onClick={() => handleAddItem('Header')} variant="secondary" className="w-full justify-start"><PlusIcon className="w-5 h-5"/> Add Header</ActionButton>
                    <ActionButton onClick={() => handleAddItem('ProfilePhoto')} variant="secondary" className="w-full justify-start"><PlusIcon className="w-5 h-5"/> Add Photo</ActionButton>
                    <ActionButton onClick={() => handleAddItem('Bio')} variant="secondary" className="w-full justify-start"><PlusIcon className="w-5 h-5"/> Add Bio</ActionButton>
                    <ActionButton onClick={() => handleAddItem('Skills')} variant="secondary" className="w-full justify-start"><PlusIcon className="w-5 h-5"/> Add Skills</ActionButton>
                    <ActionButton onClick={() => handleAddItem('Experience')} variant="secondary" className="w-full justify-start"><PlusIcon className="w-5 h-5"/> Add Experience</ActionButton>
                    <ActionButton onClick={() => handleAddItem('Education')} variant="secondary" className="w-full justify-start"><PlusIcon className="w-5 h-5"/> Add Education</ActionButton>
                    <ActionButton onClick={() => handleAddItem('Projects')} variant="secondary" className="w-full justify-start"><PlusIcon className="w-5 h-5"/> Add Projects</ActionButton>
                </div>
            </aside>

            <main className="flex-1 p-8 overflow-auto flex flex-col bg-gradient-to-br from-slate-900 to-slate-950">
                <div className="flex justify-between items-center mb-6 px-4">
                    <div className="flex items-center gap-2">
                         <ActionButton onClick={handleUndo} disabled={historyIndex === 0}><ArrowUturnLeftIcon className="w-5 h-5" />Undo</ActionButton>
                         <ActionButton onClick={handleRedo} disabled={historyIndex >= history.length - 1}>Redo<ArrowUturnRightIcon className="w-5 h-5" /></ActionButton>
                    </div>
                    <div className="flex items-center gap-4">
                        <ActionButton onClick={handleSaveLayout} variant="secondary">Save Layout</ActionButton>
                        <ActionButton onClick={exportToPdf} variant="primary"><ArrowDownTrayIcon className="w-5 h-5" />Export to PDF</ActionButton>
                    </div>
                </div>
                
                <div className="flex-grow flex items-center justify-center">
                     <div className="mx-auto" style={{ width: '800px', height: '1120px' }}>
                        <div ref={canvasRef} className="w-full h-full bg-white text-black relative shadow-2xl rounded-xl" onClick={() => setSelectedItemId(null)}>
                            {canvasItems.map(item => {
                                const Component = componentMap[item.componentType];
                                return (
                                    <motion.div
                                        key={item.id} drag onDragEnd={(e, info) => handleUpdatePosition(item.id, info)}
                                        onTap={(e) => { e.stopPropagation(); setSelectedItemId(item.id); }}
                                        style={{ position: 'absolute', top: item.y, left: item.x, width: item.width, height: item.height }}
                                        className={`cursor-move flex justify-center items-center rounded-md transition-all duration-200 ${selectedItemId === item.id ? 'ring-2 ring-indigo-500 ring-offset-2 ring-offset-white' : 'hover:ring-2 hover:ring-indigo-300/70'}`}
                                        dragConstraints={canvasRef}
                                    >
                                        <Component {...item.props} />
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </main>
            
            <AnimatePresence>
                {selectedItem && (
                    <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', stiffness: 300, damping: 30 }} className="flex-shrink-0 h-full">
                        <Inspector item={selectedItem} onUpdate={handleUpdateItemProps} onDelete={handleDeleteItem} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}