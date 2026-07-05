'use client'
import { authClient } from '@/lib/auth-client';
import { Button, Card, Description, FieldError, Fieldset, Form, Input, Label, TextField } from '@heroui/react';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';
import { LuLogIn } from 'react-icons/lu';
import { toast } from 'react-toastify';

const SignInPage = () => {
    const onSubmit = async (e) => {
        e.preventDefault();
        const fromData = new FormData(e.currentTarget)
        const user = Object.fromEntries(fromData.entries())
        console.log(user)
        const { data, error } = await authClient.signIn.email({
            email: user.email,
            password: user.password,
        })
        if (data) {
            toast.success("SignIn successfully");
            redirect('/')
        }
        else if(error){
            toast.error("SingIn is Not successfully")
            return
        }
    }
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
            bg-clip-text text-transparent'>Login Now</h2>
            <Form onSubmit={onSubmit}>
                <Fieldset className="w-full">
                    <Fieldset.Group>
                        <TextField isRequired name="email" type="email">
                            <Label>Email</Label>
                            <Input placeholder="john@example.com"
                                variant="secondary"
                                className={'rounded-none'}
                                classNames={{
                                    inputWrapper:
                                        "border border-gray-200 hover:border-fuchsia-400 focus-within:border-cyan-500 transition-all",
                                }} />
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
                            <Input placeholder="Enter your password" className={'rounded-none'} variant='secondary' />
                            <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                            <FieldError />
                        </TextField>
                    </Fieldset.Group>

                    <Fieldset.Actions className='flex flex-col'>
                        <li className={'w-full hover:bg-separator-secondary p-2 rounded-2xl text-center'}>
                            Forgotten Password?
                        </li>
                        <Button type="submit" className={'w-full'}>
                            <LuLogIn />
                            Login
                        </Button>
                        <p>Or continue with</p>
                        <Button onClick={handleGoogleSingIn} className="w-full m-2 rounded-none" variant="tertiary">
                            <Icon icon="devicon:google" />
                            Sign in with Google
                        </Button>
                        <p>Dont have an account? <Link href={'signUp'} className='text-blue-400 font-bold'>Register now</Link> </p>
                    </Fieldset.Actions>
                </Fieldset>
            </Form>
        </Card>
    );
};

export default SignInPage;