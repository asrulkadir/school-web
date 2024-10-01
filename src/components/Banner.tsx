"use client";

interface IProps {
  title: string;
}

const Banner = ({ title }: IProps) => {
  return (
    <section>
      <div
        className="min-h-[250px] rounded-b-[100px] bg-red-200 lg:min-h-[300px]"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://picsum.photos/1920/1080)`,
        }}
      >
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center pb-10 pt-20">
            <h1 className="mt-4 text-center text-4xl font-bold text-white">
              {title}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
