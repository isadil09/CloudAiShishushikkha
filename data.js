// Optional on every book: pages: ["p1.jpg", "p2.jpg", "p3.jpg", "p4.jpg", "p5.jpg"]
// → shown as "বইয়ের ভিতরের পেজ" when a customer opens the book.
const seriesData = [
  {
    id: "oxford",
    title: "Oxford Reading Circle",
    coverImg: "series_cover.jpg", // 👈 Change series image here (e.g., "oxford-series.jpg")
    books: [
      { title: "Primer", price: "১০০", coverImg: "orcp.jpeg" }, // 👈 Change book image here
      { title: "One", price: "১২০", coverImg: "orc1.jpg" },
      { title: "Two", price: "১২০", coverImg: "orc2.jpg" },
      { title: "Three", price: "১৩০", coverImg: "book.jpeg" },
      { title: "Four", price: "১৪০", coverImg: "book.jpeg" },
      { title: "Five", price: "১৪০", coverImg: "book.jpeg" }
    ]
  },
  {
    id: "grammar",
    title: "Fun With Grammar",
    coverImg: "series_cover.jpg",
    books: [
      { title: "Book-A", price: "১০০", coverImg: "book.jpeg" },
      { title: "Book-B", price: "১১০", coverImg: "book.jpeg" },
      { title: "Book-1", price: "১২০", coverImg: "book.jpeg" },
      { title: "Book-2", price: "১৩০", coverImg: "book.jpeg" },
      { title: "Book-3", price: "১৪০", coverImg: "book.jpeg" },
      { title: "Book-4", price: "১৪০", coverImg: "book.jpeg" }
    ]
  },
  {
    id: "english_bangla",
    title: "ইংলিশ শিখবো বাংলা দিয়ে",
    coverImg: "series_cover.jpg",
    books: [
      { title: "Book-1", price: "১০০", coverImg: "book.jpeg" },
      { title: "Book-2", price: "১০০", coverImg: "book.jpeg" },
      { title: "Book-3", price: "১০০", coverImg: "book.jpeg" }
    ]
  },
  {
    id: "times1000",
    title: "Times 1000",
    coverImg: "series_cover.jpg",
    books: [
      { title: "Action Words", price: "২৮০", coverImg: "book.jpeg" },
      { title: "Words in Pictures", price: "২৫০", coverImg: "book.jpeg" }
    ]
  },
  {
    id: "mathsahead",
    title: "Success with MathsAhead",
    coverImg: "series_cover.jpg",
    books: [
      { title: "Primer A", price: "১৫০", coverImg: "book.jpeg" },
      { title: "Primer B", price: "১৬০", coverImg: "book.jpeg" },
      { title: "Book-1", price: "২০০", coverImg: "book.jpeg" },
      { title: "Book-2", price: "২০০", coverImg: "book.jpeg" },
      { title: "Book-3", price: "২০০", coverImg: "book.jpeg" },
      { title: "Book-4", price: "২১০", coverImg: "book.jpeg" }
    ]
  },
  {
    id: "number_fun",
    title: "Number Fun",
    coverImg: "series_cover.jpg",
    books: [
      { title: "Book 0", price: "১২০", coverImg: "book.jpeg" },
      { title: "Book 1", price: "১৩০", coverImg: "book.jpeg" },
      { title: "Book 2", price: "১৪০", coverImg: "book.jpeg" }
    ]
  },
  {
    id: "table_book",
    title: "Table Book with Multiplication",
    coverImg: "series_cover.jpg",
    books: [
      { title: "Table Book with Multiplication", price: "১৫০", coverImg: "book.jpeg" }
    ]
  },
  {
    id: "learning_number",
    title: "Learning Number",
    coverImg: "series_cover.jpg",
    books: [
      { title: "Book 0", price: "১০০", coverImg: "book.jpeg" },
      { title: "Book 1", price: "১২০", coverImg: "book.jpeg" },
      { title: "Book 2", price: "১২০", coverImg: "book.jpeg" }
    ]
  },
  {
    id: "add_take_away",
    title: "Add And Take Away S-2",
    coverImg: "series_cover.jpg",
    books: [
      { title: "Add And Take Away S-2", price: "১২০", coverImg: "book.jpeg" }
    ]
  },
  {
    id: "radiant_way",
    title: "The Radiant Way",
    coverImg: "series_cover.jpg",
    books: [
      { title: "Per-Primer", price: "৮০", coverImg: "book.jpeg" },
      { title: "First Step", price: "৯০", coverImg: "book.jpeg" },
      { title: "Second Step", price: "১০০", coverImg: "book.jpeg" },
      { title: "Third Step", price: "১৩০", coverImg: "book.jpeg" },
      { title: "Forth Step", price: "১৪০", coverImg: "book.jpeg" }
    ]
  },
  {
    id: "read_know",
    title: "Read and Know",
    coverImg: "series_cover.jpg",
    books: [
      { title: "PG/Nursery", price: "১২০", coverImg: "book.jpeg" },
      { title: "KG", price: "১৫০", coverImg: "book.jpeg" },
      { title: "Book One", price: "১৫০", coverImg: "book.jpeg" },
      { title: "Book Two", price: "১৫০", coverImg: "book.jpeg" },
      { title: "Book Three", price: "১৮০", coverImg: "book.jpeg" },
      { title: "Book Four", price: "১৮০", coverImg: "book.jpeg" },
      { title: "Book Five", price: "২০০", coverImg: "book.jpeg" }
    ]
  },
  {
    id: "conversation",
    title: "Step By Step Conversation",
    coverImg: "series_cover.jpg",
    books: [
      { title: "Book-A", price: "১১৫", coverImg: "book.jpeg" },
      { title: "Book-B", price: "১১৫", coverImg: "book.jpeg" },
      { title: "Book-C", price: "১৫০", coverImg: "book.jpeg" },
      { title: "Book-1", price: "১৮০", coverImg: "book.jpeg" },
      { title: "Book-2", price: "১৮০", coverImg: "book.jpeg" }
    ]
  },
  {
    id: "science",
    title: "Primary Science",
    coverImg: "series_cover.jpg",
    books: [
      { title: "Introductory", price: "১৫০", coverImg: "book.jpeg" },
      { title: "Book-1", price: "১৬০", coverImg: "book.jpeg" },
      { title: "Book-2", price: "১৬০", coverImg: "book.jpeg" }
    ]
  },
  {
    id: "social_studies",
    title: "Social Studies",
    coverImg: "series_cover.jpg",
    books: [
      { title: "Book-0", price: "১৮০", coverImg: "book.jpeg" },
      { title: "Book-1", price: "২১০", coverImg: "book.jpeg" },
      { title: "Book-2", price: "২১০", coverImg: "book.jpeg" },
      { title: "Book-3", price: "২১০", coverImg: "book.jpeg" }
    ]
  },
  {
    id: "mental_math",
    title: "Enjoying Mental Math",
    coverImg: "series_cover.jpg",
    books: [
      { title: "Book-1", price: "১৩০", coverImg: "book.jpeg" },
      { title: "Book-2", price: "১৩০", coverImg: "book.jpeg" },
      { title: "Book-3", price: "১৩০", coverImg: "book.jpeg" },
      { title: "Book-4", price: "১৩০", coverImg: "book.jpeg" },
      { title: "Book-5", price: "১৩০", coverImg: "book.jpeg" }
    ]
  },
  {
    id: "olympiad",
    title: "Maths Olympiad",
    coverImg: "series_cover.jpg",
    books: [
      { title: "Book 1", price: "২০০", coverImg: "book.jpeg" },
      { title: "Book 2", price: "২০০", coverImg: "book.jpeg" },
      { title: "Book 3", price: "২০০", coverImg: "book.jpeg" }
    ]
  },
  {
    id: "nelson_grammar",
    title: "Nelson English: Grammar",
    coverImg: "series_cover.jpg",
    books: [
      { title: "Pupil Book A", price: "৮০", coverImg: "book.jpeg" },
      { title: "Pupil Book-1", price: "৮০", coverImg: "book.jpeg" },
      { title: "Pupil Book-2", price: "৯০", coverImg: "book.jpeg" },
      { title: "Pupil Book-3", price: "৯০", coverImg: "book.jpeg" },
      { title: "Pupil Book-4", price: "৯০", coverImg: "book.jpeg" }
    ]
  },
  {
    id: "nelson_spelling",
    title: "Nelson English: Spelling",
    coverImg: "series_cover.jpg",
    books: [
      { title: "Pupil Book A", price: "৮০", coverImg: "book.jpeg" },
      { title: "Pupil Book-1", price: "৮০", coverImg: "book.jpeg" },
      { title: "Pupil Book-2", price: "৯০", coverImg: "book.jpeg" },
      { title: "Pupil Book-3", price: "৯০", coverImg: "book.jpeg" },
      { title: "Pupil Book-4", price: "৯০", coverImg: "book.jpeg" }
    ]
  },
  {
    id: "nelson_workbook",
    title: "Nelson English: Workbook",
    coverImg: "series_cover.jpg",
    books: [
      { title: "Work Book-1", price: "৮০", coverImg: "book.jpeg" },
      { title: "Work Book-2", price: "৮০", coverImg: "book.jpeg" },
      { title: "Work Book-3", price: "৮০", coverImg: "book.jpeg" },
      { title: "Work Book-4", price: "৯০", coverImg: "book.jpeg" },
      { title: "Work Book-5", price: "৯০", coverImg: "book.jpeg" },
      { title: "Work Book-6", price: "৯০", coverImg: "book.jpeg" }
    ]
  }
];

const bnToEnMap = { '০': 0, '১': 1, '২': 2, '৩': 3, '৪': 4, '৫': 5, '৬': 6, '৭': 7, '৮': 8, '৯': 9 };
const enToBnMap = { 0: '০', 1: '১', 2: '২', 3: '৩', 4: '৪', 5: '৫', 6: '৬', 7: '৭', 8: '৮', 9: '৯' };

function toEnglishNum(bnStr) {
  return parseInt(bnStr.split('').map(c => bnToEnMap[c] !== undefined ? bnToEnMap[c] : c).join(''));
}
function toBengaliNum(enNum) {
  return enNum.toString().split('').map(c => enToBnMap[c] !== undefined ? enToBnMap[c] : c).join('');
}
