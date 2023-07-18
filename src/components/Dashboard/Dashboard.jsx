import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
    const studentMarks = [
        { id: 1, name: "Student 1", math: 85, english: 92, physics: 78 },
        { id: 2, name: "Student 2", math: 76, english: 88, physics: 95 },
        { id: 3, name: "Student 3", math: 92, english: 84, physics: 90 },
        { id: 4, name: "Student 4", math: 81, english: 79, physics: 87 },
        { id: 5, name: "Student 5", math: 90, english: 95, physics: 93 },
        { id: 6, name: "Student 6", math: 78, english: 85, physics: 91 },
        { id: 7, name: "Student 7", math: 88, english: 76, physics: 83 },
        { id: 8, name: "Student 8", math: 94, english: 90, physics: 89 },
        { id: 9, name: "Student 9", math: 82, english: 92, physics: 85 },
        { id: 10, name: "Student 10", math: 87, english: 81, physics: 94 },
        { id: 11, name: "Student 11", math: 91, english: 93, physics: 80 },
        { id: 12, name: "Student 12", math: 83, english: 88, physics: 87 }
      ];
    return (
        <div>
            <LineChart width={1000} height={300} data={studentMarks}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line dataKey="math"></Line>
                <Line dataKey="english"></Line>
                <Line dataKey="physics"></Line>
            </LineChart>
        </div>
    );
};

export default Dashboard;