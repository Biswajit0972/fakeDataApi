
// create new userHook

import {useMutation} from "@tanstack/react-query";
import {
    userSignup,
    userLogin,
    userUpdate,
    userChangePassword,
    userLogout,
    getUserbyId,
    getNotesbyUserID,
    userProfile,
    getAllNotes, createNewNote
} from "../../queryFunctions";
import {toast} from "react-toastify";



export const useCreateUser = () => {
    const { data, isPending, mutateAsync } = useMutation({
        mutationFn: () => userSignup(),
        onSuccess: () => toast.success("User created successfully!"),
        onError: (error) => toast.error(error.message),
    });

    return { data, isPending, mutateAsync };
};

export const useUserLogin = () => {
    const { data, isPending, mutateAsync } = useMutation({
        mutationFn: () => userLogin(),
        onSuccess: () => toast.success("Login successful!"),
        onError: (err) => toast.error(err.message || "Login failed"),
    });

    return { data, isPending, mutateAsync };
};

export const useUpdateUser = () => {
    const { data, isPending, mutateAsync } = useMutation({
        mutationFn: () => userUpdate(),
        onSuccess: () => toast.success("User updated successfully!"),
        onError: (err) => toast.error(err.message || "Update failed"),
    });

    return { data, isPending, mutateAsync };
};

export const useChangePassword = () => {
    const { data, isPending, mutateAsync } = useMutation({
        mutationFn: () => userChangePassword(),
        onSuccess: () => toast.success("Password changed successfully!"),
        onError: (err) => toast.error(err.message || "Failed to change password"),
    });

    return { data, isPending, mutateAsync };
};

export const useLogout = () => {
    const { data, isPending, mutateAsync } = useMutation({
        mutationFn: () => userLogout(),
        onSuccess: () => toast.success("Logged out successfully!"),
        onError: (err) => toast.error(err.message || "Logout failed"),
    });

    return { data, isPending, mutateAsync };
};

export const useGetUserById = () => {
    const { data: userById, isPending, mutateAsync } = useMutation({
        mutationFn: () => getUserbyId(),
    });

    return { userById, isPending, mutateAsync };
};

export const useGetUserProfile = () => {
    const { data, isPending, mutateAsync } = useMutation({
        mutationFn: () => userProfile(),
    });

    return { data, isPending, mutateAsync };
};

export const useGetNotesByUser = () => {
    const { data: userNotes, isPending, mutateAsync } = useMutation({
        mutationFn: () => getNotesbyUserID(),
    });

    return { userNotes, isPending, mutateAsync };
};

// START CONTENT HOOKS HERE

export const useGetAllContent = () => {
    const {isPending, data, isError, error , mutateAsync} = useMutation({
            mutationFn: getAllNotes,
    });

    return { isPending, data, isError, error, mutateAsync };
};

export const useCreateContent = () => {
    const {isPending, data, isError, error , mutateAsync} = useMutation({
        mutationFn: createNewNote,
        onSuccess: () => toast.success("New  data  successfully stored!"),
        onError: (err) => toast.error(err.message || "Logout failed"),
    });

    return { isPending, data, isError, error, mutateAsync };
}

export const useUpdateContent = () => {
    const {isPending, data, isError, error , mutateAsync} = useMutation({
        mutationFn: createNewNote,
        onSuccess: () => toast.success("New  data  successfully stored!"),
        onError: (err) => toast.error(err.message || "Logout failed"),
    });

    return { isPending, data, isError, error, mutateAsync };
}

export const useGetALlContentByUserId = () => {
    const {isPending, data, isError, error , mutateAsync} = useMutation({
        mutationFn: createNewNote,
        onSuccess: () => toast.success(" content found successfully"),
        onError: (err) => toast.error(err.message || "Logout failed"),
    });

    return { isPending, data, isError, error, mutateAsync };
}