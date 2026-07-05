'use client'
import React from 'react';

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
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { authClient } from '@/lib/auth-client';
import { redirect } from 'next/navigation';
import { toast } from 'react-toastify';

const SignUpPage = () => {
    const onSubmit = async (e) => {
        e.preventDefault();
        const fromData = new FormData(e.currentTarget)
        const user = Object.fromEntries(fromData.entries())
        console.log(user)
        const { data, error } = await authClient.signUp.email({
            email: user.email,
            password: user.password,
            name: user.name,
            image: user.image,
        })

        if (data) {
            toast.success("SignUp successfully");
            redirect('/')
        }
        else if (error) {
            toast.error("SingUp is Not successfully")
            return
        }

    };
    const handleGoogleSingIn = async () => {
        await authClient.signIn.social({
            provider: "google"
        });
    }
    return (
        <Card className='max-w-2xl mx-auto mt-10 w-full max-w-md rounded-3xl border border-white/30
        bg-white/80 backdrop-blur-xl shadow-2xl p-8'>
            <h2 className='text-3xl font-bold text-center bg-gradient-to-r
            from-fuchsia-600 via-purple-600 to-cyan-500
            bg-clip-text text-transparent'>Register Now</h2>
            <Form onSubmit={onSubmit}>
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
                            <Label>Photo_URL</Label>
                            <Input placeholder='Your image url' variant='secondary' className={'rounded-none'} />
                            <FieldError />
                        </TextField>

                        <TextField
                            isRequired
                            minLength={8}
                            name="password"
                            type="password"
                            validate={(value) => {
                                if (value.length < 6) {
                                    return "Password must be at least 8 characters";
                                }
                                if (!/[A-Z]/.test(value)) {
                                    return "Password must contain at least one uppercase letter";
                                }
                                if (!/[0-9]/.test(value)) {
                                    return "Password must contain at least one number";
                                }
                                if (!/[a-z]/.test(value)) {
                                    return "password must contain at least one lowercase letter";
                                }
                                return null;
                            }}
                        >
                            <Label>Password</Label>
                            <Input placeholder="Enter your password" className={'rounded-none'} variant='secondary' />
                            <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                            <FieldError />
                        </TextField>
                    </Fieldset.Group>
                    <Fieldset.Actions className='flex flex-col'>
                        <Button type="submit" className={'w-full'}>
                            <FcRegisteredTrademark />
                            Register
                        </Button>
                        <p>Or continue with</p>
                        <Button onClick={handleGoogleSingIn} className="w-full m-2 rounded-none" variant="tertiary">
                            <Icon icon="devicon:google" />
                            Sign in with Google
                        </Button>
                        <p>Aleready have an account? <Link href={'signIn'} className='text-blue-400 font-bold'> Sign In</Link> </p>
                    </Fieldset.Actions>
                </Fieldset>
            </Form>


        </Card>
    );
};

export default SignUpPage;