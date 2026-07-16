import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Crm() {
    return (
        <div className="crm-layout">
            <h1>CRM Система</h1>

            <main>
                <Outlet />
            </main>
        </div>
    );
}
