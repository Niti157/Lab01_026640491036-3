import { BookData } from "./BookData";

export default function Index() {

  return (
    <div className="font-sans p-4">
        <div>
            <table>
            <thead>
                <tr>
                    <th className="p-3 border">รหัสหนังสือ</th>
                    <th className="p-3 border">ชื่อหนังสือ</th>
                    <th className="p-3 border">ปกหนังสือ</th>
                    <th className="p-3 border">รายละเอียดหนังสือ</th>
                    <th className="p-3 border">ผู้เขียน</th>
                    <th className="p-3 border">ผู้จัดจำหน่าย</th>
                    <th className="p-3 border">ราคา</th>
                    <th className="p-3 border">ขายดีที่สุด</th>
                    <th className="p-3 border">แฟลชเซล</th>
                    <th className="p-3 border">ข้อมูลจาก</th>
                </tr>
            </thead>
            <tbody>
                {BookData.map(book => (
                     <tr key={book.code}>
                        <td className="p-3 border">{book.code}</td>
                        <td className="p-3 border">{book.title}</td>
                        <td className="p-3 border">{book.cover ? (
                                <a href={book.cover} target="_blank" rel="noopener noreferrer">
                                    คลิกเพื่อดูรูป
                                </a>
                            ) : 'No Link'}</td>
                        <td className="p-3 border">{book.description}</td>
                        <td className="p-3 border">{book.category}</td>
                        <td className="p-3 border">{book.autuor}</td>
                        <td className="p-3 border">{book.publishing}</td>
                        <td className="p-3 border">{book.price}</td>
                        <td className="p-3 border">{book.bestseller}</td>
                        <td className="p-3 border">{book.flashsale}</td>
                        <td className="p-3 border">{book.reference}</td>
                    </tr>
                ))}
                    </tbody>
            </table>
            </div>
    </div>
  );
}
