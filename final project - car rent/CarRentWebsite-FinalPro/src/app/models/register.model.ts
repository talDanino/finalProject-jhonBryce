export class Register{

    public constructor(
        public fullName?: string,
        public ID?: string,
        public userName?: string,
        public birthDate?: string,
        public gender?: Gender,
        public email?: string,
        public password?: string
    ){}
}

enum Gender{
    male,
    female
}