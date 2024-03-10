import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from "next/link";
import { BBSData } from '../types/types';

interface BBSDataProps {
    bbsData: BBSData;
}

const BBSCard = ({ bbsData }: BBSDataProps) => {
    const { id, title, content, createdAt, username } = bbsData;

    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{username}</CardDescription>
            </CardHeader>
            <CardContent>{content}</CardContent>
            <CardFooter className="flex justify-between">
                <Link className="text-blue-500" href={`/bbs-posts/${id}`}>
                    Read More
                </Link>
            </CardFooter>
        </Card>
    )
}

export default BBSCard