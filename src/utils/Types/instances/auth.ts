export type AuthRegistrationType = {
	name: string
	surname: string
	email: string
	password: string
}

export type AuthLoginType = {
	email: string
	password: string
}

export type AuthActivateType = {
	token: string
}

export type AuthSetNewPassword = {
	password: string
	token: string
}

export type AuthResetPasswordType = {
	email: string
}

export type AuthChangePasswordType = {
	oldPassword: string
	newPassword: string
}

export type AuthGoogleType = {
	token: string
	isLogin: boolean
}

export type AuthFacebookType = {
	token: string
	isLogin: boolean
}
