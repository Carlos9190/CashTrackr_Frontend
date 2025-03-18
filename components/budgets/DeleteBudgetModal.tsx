"use client"

import { Fragment } from 'react';
import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import ConfirmPasswordForm from './ConfirmPasswordForm';

export default function DeleteBudgetModal() {
    const router = useRouter();
    const pathName = usePathname();
    const searchParams = useSearchParams();
    const deleteBudgetId = searchParams.get('deleteBudgetId');
    const show = deleteBudgetId ? true : false;

    const hideModal = new URLSearchParams(searchParams.toString());
    hideModal.delete('deleteBudgetId');

    return (
        <Transition appear show={show} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={() => router.replace(`${pathName}?${hideModal}`)}>
                <TransitionChild
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/60" />
                </TransitionChild>

                <div className="fixed inset-0 overflow-y-auto flex items-center justify-center p-4 text-center">
                    <TransitionChild
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <DialogPanel className="w-full max-w-lg sm:max-w-xl md:max-w-2xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all p-6 sm:p-8 md:p-12">
                            <ConfirmPasswordForm />
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </Dialog>
        </Transition>
    );
}