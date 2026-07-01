"use client";

import { Envelope } from "@gravity-ui/icons";
import { Button, FieldError, Input, Label, Modal, Surface, Select, TextArea, TextField, ListBox } from "@heroui/react";
import { CiEdit } from "react-icons/ci";

export function EditModal({tutor}) {
    const onSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const addtutors = Object.fromEntries(formData.entries())
        console.log(addtutors)

        const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/addtutor/${tutor._id}`,{
            method:'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(addtutors)
        })
        const data=await res.json()
        if(data){
            toast.success("Edit successfully")
        }

    }
    return (
        <Modal>
            <Button variant='outline' ><CiEdit /></Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <Envelope className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>Edit Tutors</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form
                                    onSubmit={onSubmit}
                                    className="p-10 space-y-8"
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {/* Tutor Name */}
                                        <div className="md:col-span-2">
                                            <TextField name="name" isRequired>
                                                <Label>Tutor Name</Label>
                                                <Input placeholder="Tutor name" />
                                                <FieldError />
                                            </TextField>
                                        </div>
                                        {/* Image URL - Removed preview */}
                                        <div className="md:col-span-2">
                                            <TextField name="imageUrl" isRequired>
                                                <Label>Photo</Label>
                                                <Input
                                                    type="url"
                                                    placeholder="tutor.jpg"
                                                    className="rounded-none"
                                                />
                                                <FieldError />
                                            </TextField>
                                        </div>
                                        {/* Category - Updated Select Component */}
                                        <div>
                                            <Select
                                                name="category"
                                                isRequired
                                                className="w-full"
                                                placeholder="Select category"
                                              
                                            >
                                                <Label>Subject/Category</Label>
                                                <Select.Trigger className="rounded-2xl">
                                                    <Select.Value />
                                                    <Select.Indicator />
                                                </Select.Trigger>
                                                <Select.Popover>
                                                    <ListBox>
                                                        <ListBox.Item id="english" textValue="english">
                                                            English
                                                            <ListBox.ItemIndicator />
                                                        </ListBox.Item>
                                                        <ListBox.Item id="mathematics" textValue="mathematics">
                                                            Mathematics
                                                            <ListBox.ItemIndicator />
                                                        </ListBox.Item>
                                                        <ListBox.Item id="physics" textValue="physics">
                                                            Physics
                                                            <ListBox.ItemIndicator />
                                                        </ListBox.Item>
                                                        <ListBox.Item id="biology" textValue="biology">
                                                            Biology
                                                            <ListBox.ItemIndicator />
                                                        </ListBox.Item>
                                                        <ListBox.Item id="chemistry" textValue="chemistry">
                                                            Chemistry
                                                            <ListBox.ItemIndicator />
                                                        </ListBox.Item>
                                                        <ListBox.Item id="bangla" textValue="bangla">
                                                            Bangla
                                                            <ListBox.ItemIndicator />
                                                        </ListBox.Item>
                                                    </ListBox>
                                                </Select.Popover>
                                            </Select>
                                        </div>

                                        {/* Available Days and time */}
                                        <TextField name="day_times" isRequired>
                                            <Label>Available Days and time</Label>
                                            <Input placeholder="Sun - Thu 5:00 PM - 8:00 PM" className={'rounded-noen'} ></Input>

                                        </TextField>


                                        {/* Country */}
                                        <TextField name="fee" isRequired>
                                            <Label>Hourly fee</Label>

                                            <Input placeholder="Amount" className="rounded-none"  />
                                            <FieldError />
                                        </TextField>

                                        {/* Price */}
                                        <TextField name="slot" type="number" isRequired>
                                            <Label>Total slot</Label>
                                            <Input
                                                type="number"
                                                placeholder="3"
                                                className="rounded-none"
                                                
                                            />
                                            <FieldError />
                                        </TextField>


                                        {/* Session start Date */}
                                        <div className="md:col-span-2">
                                            <TextField name="startDate" type="date" isRequired>
                                                <Label>Session Start</Label>
                                                <Input type="date" className="rounded-none"></Input>
                                            </TextField>
                                        </div>


                                        {/* Description */}
                                        <div className="md:col-span-2">
                                            <TextField name="experience" isRequired>
                                                <Label>Institution $ Experience</Label>
                                                <TextArea
                                                    placeholder="institution and experience"
                                                    className="rounded-none"
                                                    
                                                />
                                                <FieldError />
                                            </TextField>
                                        </div>
                                        <div className="md:col-span-2">
                                            <TextField name="location" isRequired>
                                                <Label>Location</Label>
                                                <TextArea
                                                    placeholder="Area/City"
                                                    className="rounded-none"
                                                  
                                                />
                                                <FieldError />
                                            </TextField>
                                        </div>
                                        <div>
                                            <Select
                                                name="mode"
                                                isRequired
                                                className="w-full"
                                                placeholder="Select category"
                                               
                                            >
                                                <Label>Teaching Mode</Label>
                                                <Select.Trigger className="rounded-2xl">
                                                    <Select.Value />
                                                    <Select.Indicator />
                                                </Select.Trigger>
                                                <Select.Popover>
                                                    <ListBox>
                                                        <ListBox.Item id="online" textValue="online">
                                                            Online
                                                            <ListBox.ItemIndicator />
                                                        </ListBox.Item>
                                                        <ListBox.Item id="offline" textValue="offline">
                                                            Offline
                                                            <ListBox.ItemIndicator />
                                                        </ListBox.Item>
                                                        <ListBox.Item id="both" textValue="both">
                                                            Both
                                                            <ListBox.ItemIndicator />
                                                        </ListBox.Item>
                                                    </ListBox>
                                                </Select.Popover>
                                            </Select>
                                        </div>
                                    </div>
                                    <Modal.Footer>
                                        <Button slot="close" type="submit">save</Button>
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