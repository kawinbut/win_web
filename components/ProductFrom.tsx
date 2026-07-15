export default function ProductFrom() {
    return (
        <div>
            <h1> หมวดหมู่สินค้า </h1>

                <form>
                    <input type="text" name="name" /> <br />

                    <textarea name="description" placeholder="กรอกรายระเอียด"></textarea>

                    <button>บันทึกข้อมูล</button>
                </form>

        </div>
    );
}