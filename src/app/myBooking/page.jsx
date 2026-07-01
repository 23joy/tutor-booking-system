import { auth } from '@/lib/auth';
import { Button, Card, Table } from '@heroui/react';
import { headers } from 'next/headers';
import React from 'react';
import { DeleteBookingAlert } from '../components/DeleteBookingAlert';

const MyBookingPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()

    })
    const user = session.user;

    const { token } = await auth.api.getToken({
        headers: await headers()
    })
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/bookings/${user?.id}`, {
        headers: {
            authorization: `Bearer ${token}`,
        }
    })
    const bookings = await res.json()
    console.log(bookings)
    return (
        <div className='max-w-7xl mx-auto px-4 py-6'>
            <h2 className='text-center text-xl font-bold  mt-5'>MY BOOKING</h2>
            {bookings.length > 0 ? <>
                <div className='max-w-7xl gap-3 mx-auto'>
                    <Table variant="secondary">
                        <Table.ScrollContainer>
                            <Table.Content aria-label="Team members" className="min-w-[600px]">
                                <Table.Header>
                                    <Table.Column isRowHeader>Name</Table.Column>
                                    <Table.Column>phone</Table.Column>
                                    <Table.Column>Tutor Name</Table.Column>
                                    <Table.Column>Email</Table.Column>
                                    <Table.Column>status</Table.Column>
                                    <Table.Column>Delete</Table.Column>


                                </Table.Header>
                                <Table.Body>
                                    {
                                        bookings.map((booking) =>
                                            <Table.Row key={booking?._id}>
                                                <Table.Cell>{booking?.name}</Table.Cell>
                                                <Table.Cell>{booking?.phone}</Table.Cell>
                                                <Table.Cell>{booking?.tutor}</Table.Cell>
                                                <Table.Cell>{booking?.email}</Table.Cell>
                                                <Table.Cell>{booking?.mode}</Table.Cell>


                                                <Table.Cell>
                                                    <DeleteBookingAlert booking={booking?._id}></DeleteBookingAlert>
                                                </Table.Cell>
                                                {/* <Table.Cell><Button variant='outline' className={'bg-red-100 rounded-2xl text-red-400'}>X</Button></Table.Cell> */}
                                            </Table.Row>
                                        )
                                    }
                                </Table.Body>
                            </Table.Content>
                        </Table.ScrollContainer>
                    </Table>
                </div>
            </> : <>
                <Card className='text-center p-20 m-5 bg-gradient-to-r from-fuchsia-500 to-cyan-500'>
                    <h2 className='text-4xl'>Booking Not Available <br /></h2>
                    <p className='text-background'>Add new booking</p>
                </Card>
            </>}
        </div>
    );
};

export default MyBookingPage;