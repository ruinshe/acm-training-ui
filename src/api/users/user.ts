/**
 * The user entity used for UI presenting.
 */
export default class User {
    id!: number
    name!: string
    email?: string
    phone?: string
    rating!: number

    // cmputed fields, maybe in backend directly.
    lastContestId: number | undefined
    lastContest: string | undefined
}
