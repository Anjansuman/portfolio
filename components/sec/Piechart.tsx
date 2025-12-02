"use client";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

export default function Piechart() {
    const data = [
        { title: 'dev', value: 30, color: "#000000" },
        { title: 'meet', value: 20, color: "#4a4a4a" },
        { title: 'grouping', value: 10, color: "#2a2a2a" },
        { title: 'chat', value: 5, color: "#000000" },
    ];

    return (
        <div className="flex items-center justify-center rounded-full">
            <PieChart width={200} height={200}>
                <Pie
                    data={data}
                    dataKey="value"
                    startAngle={-90}
                    endAngle={270}
                    innerRadius={35}
                    outerRadius={90}
                    paddingAngle={8}
                    cornerRadius={8}
                >
                    {data.map((entry, index) => (
                        <>
                            <Cell
                                key={index}
                                fill={entry.color}
                                values="fads"
                            />
                            <Tooltip
                                content={<div className={'text-white'} children={'fasdfa'}/>}
                            />
                        </>
                    ))}
                </Pie>
            </PieChart>
        </div>
    );
}

