'use client';

import React, { useEffect, useState } from 'react';
import { Modal, ModalContent, ModalBody, ModalFooter, Button, useDisclosure, Tooltip } from '@nextui-org/react';
import axios from 'axios';
import { serverBackend } from '@/server';
import SnackbarMessage from '@/components/Common/SnackbarMessage';
import { BsFillTrashFill } from 'react-icons/bs';

export default function Delete({
    type,
    idUser,
    idPost,
    refresh,
    setRefresh,
}: {
    type: string;
    idUser?: string;
    idPost?: string;
    refresh: boolean;
    setRefresh: any;
}) {
    const [turn, setTurn] = useState<boolean>(false);
    const [status, setStatus] = useState<string>('');

    const handeSubmit = () => {
        switch (type) {
            case 'account':
                return alert(`idUser: ${idUser}, method: ${status}`);
            case 'post':
                return deletePost();
            default:
                return;
        }
    };

    const deletePost = async () => {
        const result = await axios.delete(`${serverBackend}/api/v1/post/${idPost}`);
        if (result.data.message === 'success') {
            setStatus('success');
            setRefresh(!refresh);
        }
    };

    return (
        <>
            <Tooltip color="primary" content="Xóa bài đăng">
                <div className="cursor-pointer" onClick={() => setTurn(true)} color="primary">
                    <BsFillTrashFill fontSize={20} />
                </div>
            </Tooltip>
            <Modal backdrop="blur" isOpen={turn} onOpenChange={() => setTurn(false)} placement="top-center">
                <ModalContent>
                    <ModalBody className="p-5">
                        <div className="pt-4 text-[20px]">
                            <span className="flex gap-1">Bạn có muốn xóa bài đăng này không ?</span>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" variant="flat" onClick={() => setTurn(false)}>
                            Hủy
                        </Button>
                        <Button onPress={handeSubmit} color="primary">
                            Đồng ý
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}