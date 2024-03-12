export interface ProjectDTO{
    id : string,
    name :{
        es:string,
        en:string,
    } ,
    img : string,
    technologies: string [],
    description: {
        es:string[],
        en:string[],
    },
    links: {
        [key: string]: string;
    };
}