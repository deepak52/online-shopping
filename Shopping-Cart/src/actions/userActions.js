export const trigger_login = (data) => {
    debugger
    console.log('action for login hit 1')
    return {
    type: '@user/component/login',
    payload: data
}
};

export const trigger_getLoggedInUser = (data)=>{
    return{
        type:'@user/component/logged_in_user'
    }
}

export const trigger_register = (data) => {
    return {
        type: '@user/component/register',
        payload: data
    }
}

export const trigger_editUser = (id, data) => ({
    type: '@user/component/update_user',
    id: id,
    payload: data
});

export const trigger_logout = () => ({
    type: '@user/component/logout'
});

export const trigger_checkUser = (data) => ({
    type: '@user/component/check_user_existence',
    payload: data
});

export const trigger_resetPassword = (data) => ({
    type: '@user/component/reset_password',
    payload: data
})

export const trigger_resendMail = (data) => ({
    type: '@user/component/resend_activation_mail',
    payload: data
});

export const trigger_reset = ()=>({
    type:'@user/saga_action/reset'
})