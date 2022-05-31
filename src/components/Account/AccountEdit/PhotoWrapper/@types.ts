import { User } from '@models/User'

export type PhotoWrapperProps = {
	user: User
	handleUpdate: (photo: FormData) => void
}
