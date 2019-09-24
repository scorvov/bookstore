
export default class BookstoreService {

  data = [
    {
      id: 1,
      title: 'Learning PHP, MySQL, JavaScript, CSS & HTML5',
      author: 'Robin Nixon',
      price: 13,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51AkW1znNmL._SX379_BO1,204,203,200_.jpg'},
    {
      id: 2,
      title: 'Learning React',
      author: 'Alex Banks',
      price: 35,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51FHuacxYjL._SX379_BO1,204,203,200_.jpg'}
  ];

  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.75) {
          reject(new Error('Something bad happened'));
        } else {
          resolve(this.data);
        }
      }, 700);
    });
  }
}
