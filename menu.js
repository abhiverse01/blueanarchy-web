export default function handler(req, res) {
    if (req.method === 'GET') {
      // Example menu data (in a real app, this would come from a database)
      const menu = [
        { id: 1, name: 'Burger', price: 5.99 },
        { id: 2, name: 'Pizza', price: 8.99 },
        { id: 3, name: 'Salad', price: 4.99 },
      ];
  
      res.status(200).json(menu);
    } else {
      res.status(405).end(); // Method Not Allowed
    }
  }
  