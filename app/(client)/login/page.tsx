'use client';

import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

export default function Login() {
    const [phone, setPhone] = useState<string>('');
    const [pass, setPass] = useState<string>('');

    const [hidePass, setHidePass] = useState<boolean>(true);

    const handleSubmit = () => {
        if (phone.length > 0 && pass.length > 0) {
        }
    };

    return (
        <div>
            <Modal isOpen={true} placement="top-center">
                <ModalContent>
                    <ModalHeader className="flex flex-col gap-1">Đăng nhập</ModalHeader>
                    <ModalBody>
                        <Input
                            autoFocus
                            label="Số điện thoại"
                            placeholder="Nhập số điện thoại"
                            variant="bordered"
                            type="number"
                            onChange={(e) => e.target.value[0] !== ' ' && setPhone(e.target.value)}
                            value={phone}
                        />
                        <div className="relative">
                            <Input
                                label="Mật khẩu"
                                placeholder="Nhập mật khẩu"
                                type={hidePass ? 'password' : 'text'}
                                variant="bordered"
                                value={pass}
                                onChange={(e) => e.target.value[0] !== ' ' && setPass(String(e.target.value))}
                            />
                            <div className="h-full pr-3 items-center flex absolute bottom-0 right-0">
                                {hidePass ? (
                                    <AiFillEye
                                        fontSize={20}
                                        className="cursor-pointer"
                                        onClick={() => setHidePass(false)}
                                    />
                                ) : (
                                    <AiFillEyeInvisible
                                        className="cursor-pointer"
                                        onClick={() => setHidePass(true)}
                                        fontSize={20}
                                    />
                                )}
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" variant="flat">
                            <Link className="text-red" href="/">
                                Trang trủ
                            </Link>
                        </Button>
                        <Button onClick={() => handleSubmit()} color="primary">
                            Đăng nhập
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    );
}