"use client";

import { ChartBarIcon } from "@heroicons/react/24/solid";
// Imports updated for Area Chart
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

// The custom tooltip component remains the same
const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="p-3 bg-gray-900/90 border border-gray-700 rounded-lg shadow-xl backdrop-blur-sm">
                <p className="text-base font-bold text-white">{`${label}`}</p>
                <p className="text-sm text-indigo-400">{`Proficiency: ${payload[0].value}%`}</p>
            </div>
        );
    }
    return null;
};

const SkillsAnalytics = ({ skills = [] }) => {
    const validSkills = skills.filter(skill => skill.name && skill.name.trim() !== "" && skill.percentage > 0);

    if (validSkills.length === 0) {
        return null;
    }

    return (
        <div className="max-w-6xl mx-auto p-6 space-y-4 bg-gray-800/50 backdrop-blur-sm rounded-2xl ring-1 ring-white/10 mt-8">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <ChartBarIcon className="w-6 h-6 text-indigo-400" />
                Skills Analytics
            </h3>

            <div className="w-full h-80">
                <ResponsiveContainer width="100%" height="100%">
                    {/* Replaced <BarChart> with <AreaChart> */}
                    <AreaChart
                        data={validSkills}
                        margin={{ top: 10, right: 30, left: 0, bottom: 20 }}
                    >
                        {/* Added a gradient definition for the area fill */}
                        <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                            </linearGradient>
                        </defs>

                        <XAxis
                            dataKey="name"
                            stroke="#a1a1aa"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                            angle={-25}
                            textAnchor="end"
                        />
                        <YAxis
                            stroke="#a1a1aa"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                        />
                        {/* Added a grid for better readability */}
                        <CartesianGrid strokeDasharray="3 3" stroke="#4b5563" />
                        <Tooltip
                            content={<CustomTooltip />}
                            cursor={{ stroke: '#8884d8', strokeWidth: 1, strokeDasharray: '3 3' }}
                        />
                        {/* Replaced <Bar> with the new <Area> component */}
                        <Area 
                            type="monotone" 
                            dataKey="percentage" 
                            stroke="#8884d8" 
                            strokeWidth={2}
                            fillOpacity={1} 
                            fill="url(#colorUv)" 
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default SkillsAnalytics;