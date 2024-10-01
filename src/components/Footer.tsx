"use client";

const Footer = () => {
  return (
    <footer className="relative bg-accent dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold text-accent-foreground">
              Tentang Kami
            </h3>
            <p className="mt-2 text-sm text-accent-foreground dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              ultricies, elit id aliquam ultricies, odio odio ultricies elit.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-accent-foreground">
              Kontak
            </h3>
            <p className="mt-2 text-sm text-accent-foreground dark:text-gray-400">
              Jl. Lorem Ipsum Dolor Sit Amet, No. 123, Jakarta, Indonesia
            </p>
            <p className="mt-1 text-sm text-accent-foreground dark:text-gray-400">
              +62 123 4567 890
            </p>
            <p className="mt-1 text-sm text-accent-foreground dark:text-gray-400"></p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-accent-foreground">
              Layanan
            </h3>
            <ul className="mt-2 text-sm text-accent-foreground dark:text-gray-400">
              <li className="mt-1">Lorem ipsum dolor sit amet</li>
              <li className="mt-1">Consectetur adipiscing elit</li>
              <li className="mt-1">Nullam ultricies, elit id aliquam</li>
              <li className="mt-1">Odio odio ultricies elit</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-accent-foreground">
              Ikuti Kami
            </h3>
            <div className="mt-2">
              <a
                href="#"
                className="inline-block rounded-md bg-blue-500 px-2 py-1 text-sm text-white"
              >
                Facebook
              </a>
              <a
                href="#"
                className="ml-2 inline-block rounded-md bg-blue-400 px-2 py-1 text-sm text-white"
              >
                Twitter
              </a>
              <a
                href="#"
                className="ml-2 inline-block rounded-md bg-red-500 px-2 py-1 text-sm text-white"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
        <hr className="my-8 border-black dark:border-white" />
        <div>
          <p className="mt-6 text-center text-sm text-accent-foreground dark:text-gray-400">
            © 2024 Asrul Kadir. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
