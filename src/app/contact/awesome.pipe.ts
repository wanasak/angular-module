import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'awesome'})
export class AwesomePipe implements PipeTransform {
    transform(pharse: string) {
        return pharse ? 'Awesome ' + pharse : '';
    }
}