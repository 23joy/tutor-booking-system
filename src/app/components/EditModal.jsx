"use client";

import { authClient } from "@/lib/auth-client";

import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { redirect } from "next/navigation";

import { toast } from "react-toastify";

export function EditModal({ tutor }) {

    const {data: session} = authClient.useSession()
        const user = session?.user
        
        
    const onSubmit = async (e) => {
        e.preventDefault()
        
        const formData = new FormData(e.currentTarget)
        const bookingData = Object.fromEntries(formData.entries())
        bookingData.userId=user?.id;
        bookingData.tutorId=tutor?._id;
        bookingData.Name=tutor?.name;
        bookingData.mode=tutor?.mode;
        

         const {token}=await authClient.getToken();
        const res=await fetch(`${process.env.SURVER_URI}/bookings`,{
                method:'POST',
                headers:{
                    'content-type':'application/json',
                     authorization: `Bearer ${token}`,
                },
                body:JSON.stringify(bookingData)
            })
        const data=await res.json()
        console.log(data)
       if(data){
        toast.success("the tutor booking successfully")
        redirect('/myBooking')
       }
    }
    return (
        <Modal>
            <Button variant='outline'>Book Session</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>

                            <Modal.Heading>Book Session</Modal.Heading>
                            <p className="mt-1.5 text-sm leading-5 text-muted">
                                Make changes to your profile here.Click save when youre done.
                            </p>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form  onSubmit={onSubmit} className="flex flex-col gap-4">
                                    <TextField className="w-full" name="name" type="text">
                                        <Label>Name</Label>
                                        <Input placeholder="Enter your name" />
                                    </TextField>
                                    <TextField className="w-full" name="phone" type="tel">
                                        <Label>Phone Number</Label>
                                        <Input placeholder="017XX-XXXXXX" />
                                    </TextField>
                                    <TextField className="w-full" name="tutor">
                                        <Label>Tutor Name</Label>
                                        <Input placeholder="Enter your Tutor name"  value={tutor?.name}/>
                                    </TextField>
                                    <TextField className="w-full" name="email">
                                        <Label>Email</Label>
                                        <Input placeholder="Enter your Email" type="email" />
                                    </TextField>
                                    <Modal.Footer>
                                        <Button slot="close" variant="secondary">
                                            Cancel
                                        </Button>
                                        <Button type="submit" slot="close">Confirm Booking</Button>
                                    </Modal.Footer>
                                </form>
                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}