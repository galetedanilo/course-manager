export class Course {
    id: number;
    name: string;
    releaseDate: string;
    description: string;
    duration: number;
    code: string;
    rating: number;
    price: number;
    imageUrl: string;

    constructor() {
        this.id = 0;
        this.name = '';
        this.releaseDate = '';
        this.description = '';
        this.duration = 0;
        this.code = '';
        this.rating = 0;
        this.price = 0;
        this.imageUrl = '';
    }
}