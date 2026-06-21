import { auth } from '@/lib/auth';
import { Button, Table } from '@heroui/react';
import { headers } from 'next/headers';
import React from 'react';
import { DeleteBookingAlert } from '../components/DeleteBookingAlert';

const MyBookingPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()

    })

    const user = session.user;
    console.log(user)
    const res = await fetch(`${process.env.SURVER_URI}/bookings/${user?.id}`)
    const bookings = await res.json()
    console.log(bookings)
    return (
        <div>
            <h2 className='text-center font-bold m-10'>MY BOOKING</h2>
            <div className='container gap-3 mx-auto'>
                <Table variant="secondary">
                    <Table.ScrollContainer>
                        <Table.Content aria-label="Team members" className="min-w-[600px]">
                            <Table.Header>
                                <Table.Column isRowHeader>Name</Table.Column>
                                <Table.Column>phone</Table.Column>
                                <Table.Column>Tutor Name</Table.Column>
                                <Table.Column>Email</Table.Column>
                                <Table.Column>Status</Table.Column>
                                <Table.Column>Cancel</Table.Column>
                            </Table.Header>
                            <Table.Body>
                                {
                                    bookings.map((booking) =>
                                        <Table.Row key={booking._id}>
                                            <Table.Cell>{booking.name}</Table.Cell>
                                            <Table.Cell>{booking. phone}</Table.Cell>
                                            <Table.Cell>{booking.tutor}</Table.Cell>
                                            <Table.Cell>{booking.email}</Table.Cell>
                                            <Table.Cell>
                                                <DeleteBookingAlert booking={booking._id}></DeleteBookingAlert>
                                            </Table.Cell>
                                            <Table.Cell><Button variant='outline' className={'bg-red-100 rounded-2xl text-red-400'}>X</Button></Table.Cell>
                                        </Table.Row>
                                    )
                                }
                            </Table.Body>
                        </Table.Content>
                    </Table.ScrollContainer>
                </Table>
            </div>
        </div>
    );
};

export default MyBookingPage;