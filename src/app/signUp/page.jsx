'use client'
import React from 'react';
import { FloppyDisk } from "@gravity-ui/icons";

import {
    Button,
    Card,
    Description,
    FieldError,
    Fieldset,
    Form,
    Input,
    Label,
    Surface,
    TextArea,
    TextField,
} from "@heroui/react";
import { FcRegisteredTrademark } from 'react-icons/fc';

const page = () => {
    return (
        <Card className='max-w-2xl mx-auto mt-10'>
            <h2 className='text-center p-5 font-bold text-2xl'>Register Now</h2>
            <Form>
                <Fieldset className="w-full">
                    <Fieldset.Group>
                        <TextField
                            isRequired
                            name="name"
                            validate={(value) => {
                                if (value.length < 3) {
                                    return "Name must be at least 3 characters";
                                }
                                return null;
                            }}
                        >
                            <Label>Name</Label>
                            <Input placeholder="John Doe" variant="secondary" className={'rounded-none'} />
                            <FieldError />
                        </TextField>
                        <TextField isRequired name="email" type="email">
                            <Label>Email</Label>
                            <Input placeholder="john@example.com" variant="secondary" className={'rounded-none'} />
                            <FieldError />
                        </TextField>

                        <TextField isRequired
                            name="image"
                            type='url'
                        >
                            <Label>Image</Label>
                            <Input placeholder='Your image url' variant='secondary' className={'rounded-none'}/>
                            <FieldError />
                        </TextField>

                        <TextField
                            isRequired
                            minLength={8}
                            name="password"
                            type="password"
                            validate={(value) => {
                                if (value.length < 8) {
                                    return "Password must be at least 8 characters";
                                }
                                if (!/[A-Z]/.test(value)) {
                                    return "Password must contain at least one uppercase letter";
                                }
                                if (!/[0-9]/.test(value)) {
                                    return "Password must contain at least one number";
                                }
                                return null;
                            }}
                        >
                            <Label>Password</Label>
                            <Input placeholder="Enter your password" className={'rounded-none'} variant='secondary'/>
                            <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                            <FieldError />
                        </TextField>
                    </Fieldset.Group>
                    <Fieldset.Actions>
                        <Button type="submit" className={'w-full'}>
                           <FcRegisteredTrademark/>
                            Register
                        </Button>
                    </Fieldset.Actions>
                </Fieldset>
            </Form>
        </Card>
    );
};

export default page;