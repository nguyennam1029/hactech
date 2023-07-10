import React from "react";
import RightColumn from "../components/RightColumn";
import Heading from "../components/Heading";

const IntroducePage = () => {
  return (
    <>
      <div className="lg:w-[1140px] m-auto w-full grid md:grid-cols-3 grid-cols-1 gap-7 lg:px-0 md:px-2 px-2">
        <div className="grid md:col-span-2 h-fit">
          <Heading heading="GIỚI THIỆU" />
          <div class="entry-content">
            <p>
              <strong>Giới thiệu về trường cao đẳng bách khoa việt nam</strong>
            </p>
            <p className="my-5 uppercase">
              <strong>TẦM NHÌN – SỨ MỆNH – GIÁ TRỊ CỐT LÕI</strong>
            </p>
            <p>
              – TẦM NHÌN 2022: Trường Cao Đẳng Bách Khoa Việt Nam xác định tầm
              nhìn trở thành trường học hàng đầu về chất lượng đào tạo, đáp ứng
              nhu cầu của thị trường lao động và nghiên cứu khoa học mang tính
              ứng dụng thực tiễn cao bằng cách khơi dậy và khuyến khích sự sáng
              tạo trên cơ sở tôn trọng và đề cao ý kiến cá nhân, phối hợp và
              chia sẻ thông tin các bộ phận.
            </p>
            <p className="my-4">
              – SỨ MỆNH: Cung cấp hoạt động đào tạo đa ngành, đa loại hình và
              liên thông giữa các ngành, các hệ đào tạo cao hơn.
            </p>
            <p>
              Cung cấp nguồn nhân lực có kiến thức chuyên môn và kỹ năng thực
              hành cao đáp ứng ngay yêu cầu của thị trường lao động trong và
              ngoài nước. (không qua đào tạo lại).
            </p>
            <p className="my-4">– GIÁ TRỊ CỐT LÕI:</p>
            <ol className="pl-5 list-decimal">
              <li>Xây dựng trường trở thành cơ sở đào tạo mở và linh hoạt</li>
              <li>
                Đào tạo nguồn nhân lực, nhân tài cho nền kinh tế, phục vụ đắc
                lực sự nghiệp công nghiệp hóa, hiện đại hóa đất nước.
              </li>
              <li>
                Áp dụng triệt để công nghệ thông tin vào công tác quản lý, giảng
                dạy và học tập. Thực hiện đào tạo theo học tín chỉ liên kết đào
                tạo với các trường trong và ngoài nước.
              </li>
              <li>
                Liên tục cải tiến chất lượng giáo dục đào tạo đáp ứng yêu cầu
                phát triển bền vĩnh của xã hội.
              </li>
            </ol>
            <p>
              + Đội ngũ giảng viên nhà trường từ có trình độ từ thạc sỹ đến tiến
              sỹ giàu kinh nghiệm trong đào tạo lý thuyết và thực hành đáp ứng
              nhu cầu học tập của sinh viên sau khi tốt nghiệp sẽ tiếp cận công
              việc đáp ứng thực tế tại cơ quan, doanh nghiệp.
            </p>
            <p className="my-4">– CƠ SỞ VẬT CHẤT</p>
            <p>
              Hiện nay, trường CĐ Bách Khoa Việt Nam cơ sởđược xây dựng với hệ
              thống phòng học, phòng thực hành, kí túc xá sinh viên, phòng làm
              việc khang trang hiện đại để triển khai nhiệm vụ giảng dạy và học
              tập
            </p>
            <p className="my-2">
              + Tiêu chí nhà trường là lấy sinh viên làm trọng tâm: gắn kết giữa
              nhà trường cùng doanh nghiệp đào tạo chất lượng cao, định hướng
              việc làm cho sinh viên tạo nền tảng phát triển bền vững.
            </p>
            <p>
              + Căng tin nhà ăn nằm ngay bên cạnh ký túc xá sinh viên: Phục vụ
              từ 300 người ăn/ngày. Đảm bảo vệ sinh thực phẩm, giá cả phù hợp.
            </p>
          </div>
        </div>
        <RightColumn />
      </div>
    </>
  );
};

export default IntroducePage;
