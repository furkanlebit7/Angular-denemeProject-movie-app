import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const movies = [
      {
        id: 1,
        name: 'movie 1',
        description: 'güzel film',
        imageUrl: 'https://picsum.photos/id/165/200/300',
      },
      {
        id: 2,
        name: 'movie 2',
        description: 'kötü film',
        imageUrl: 'https://picsum.photos/id/948/200/300',
      },
      {
        id: 3,
        name: 'movie 3',
        description: 'harika film',
        imageUrl: 'https://picsum.photos/id/543/200/300',
      },
      {
        id: 4,
        name: 'movie 4',
        description: 'berbat film',
        imageUrl: 'https://picsum.photos/id/987/200/300',
      },
      {
        id: 5,
        name: 'movie 5',
        description: 'değişik film',
        imageUrl: 'https://picsum.photos/id/498/200/300',
      },
      {
        id: 6,
        name: 'movie 6',
        description: 'değişik film',
        imageUrl: 'https://picsum.photos/id/654/200/300',
      },
      {
        id: 7,
        name: 'movie 7',
        description: 'değişik film',
        imageUrl: 'https://picsum.photos/id/261/200/300',
      },
      {
        id: 8,
        name: 'movie 8',
        description: 'değişik film',
        imageUrl: 'https://picsum.photos/id/403/200/300',
      },
      {
        id: 9,
        name: 'movie 9',
        description: 'değişik film',
        imageUrl: 'https://picsum.photos/id/601/200/300',
      },
      {
        id: 10,
        name: 'movie 10',
        description: 'değişik film',
        imageUrl: 'https://picsum.photos/id/845/200/300',
      },
      {
        id: 11,
        name: 'movie 11',
        description: 'değişik film',
        imageUrl: 'https://picsum.photos/id/2/200/300',
      },
      {
        id: 12,
        name: 'movie 12',
        description: 'değişik film',
        imageUrl: 'https://picsum.photos/id/52/200/300',
      },
      {
        id: 13,
        name: 'movie 13',
        description: 'değişik film',
        imageUrl: 'https://picsum.photos/id/74/200/300',
      },
    ];
    return { movies };
  }
  constructor() {}
}
