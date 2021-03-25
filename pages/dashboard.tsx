import React, { useEffect } from 'react';
import { useUser } from '../components/user';
import Verify from '../components/verify';
import DashboardC from '../components/dashboard';
import { useRouter } from 'next/router';

export default function Dashboard() {
    const router = useRouter();
    const { user } = useUser();

    useEffect(() => {
        if (!user) {
            router.push('/');
        }
    }, []);

    if (!user) return null;

    return user.discord.id ? <DashboardC /> : <Verify />;
}
