import{Pipe,PipeTransform} from "@angular/core"
@Pipe({
    name:"convertToSpaces"
})
export class ConvertToSpacesPipe{
    transform (value:string,charachter:string){
        return value.replace( charachter,' ');
    }
}