import React, { useState, useEffect } from 'react';

const DeviceList = () => {
    const [devices, setDevices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const API_URL = 'https://mobile-api.lambdatest.com/mobile-automation/api/v1/capability/generator?isVirtualDevice=true';

        fetch(API_URL)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch devices');
                }
                return response.json();
            })
            .then(data => {
                console.log('Full API Response:', data);

                // Extract Virtual Devices
                const virtualDevices = data?.virtual?.brands || {};
                console.log('Virtual Devices:', virtualDevices);

                // Flatten the device arrays
                const allVirtualDevices = Object.values(virtualDevices).flat();
                console.log('All Virtual Devices:', allVirtualDevices);

                // Set the devices state
                setDevices(allVirtualDevices);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading devices...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!Array.isArray(devices) || devices.length === 0) {
        return <p>No Virtual devices found. Please try again later.</p>;
    }

    return (
        <div>
            <h2>Compatible Android Devices</h2>
            <ul>
                {devices.map((device, index) => (
                    <li key={index}>
                        {device.name} - {device.version}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DeviceList;