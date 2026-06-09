const About = () => {
  return (
    <div className="mx-auto max-w-5xl p-8">
      <h1 className="mb-6 text-4xl font-bold">About Product Explorer</h1>

      <p className="mb-6 text-lg text-gray-600">
        Product Explorer is a modern React application built to browse, search,
        filter, and analyze products from multiple categories. The application
        consumes product data from the DummyJSON API and showcases modern
        frontend development practices using React, TypeScript, Tailwind CSS,
        and React Router.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border p-6 shadow-sm">
          <h2 className="mb-3 text-xl font-semibold">What You'll Find</h2>

          <ul className="space-y-2 text-gray-600">
            <li>🔍 Product Search</li>
            <li>📦 Category-Based Navigation</li>
            <li>⭐ Product Ratings</li>
            <li>💰 Price & Discount Information</li>
            <li>🖼️ Product Images</li>
            <li>📊 Product Dashboard</li>
          </ul>
        </div>

        <div className="rounded-xl border p-6 shadow-sm">
          <h2 className="mb-3 text-xl font-semibold">Technologies Used</h2>

          <ul className="space-y-2 text-gray-600">
            <li>⚛️ React</li>
            <li>📘 TypeScript</li>
            <li>🎨 Tailwind CSS</li>
            <li>🛣️ React Router</li>
            <li>🔄 Custom Hooks</li>
            <li>🌐 REST APIs</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 rounded-xl border p-6 shadow-sm">
        <h2 className="mb-3 text-xl font-semibold">About the Data</h2>

        <p className="text-gray-600">
          Product data is sourced from the DummyJSON Products API. The dataset
          contains products across categories such as beauty, groceries,
          fragrances, furniture, laptops, smartphones, and more. Each product
          includes details like title, description, category, price, stock
          availability, ratings, reviews, images, and discount information.
        </p>
      </div>

      <div className="mt-8 rounded-xl border p-6 shadow-sm">
        <h2 className="mb-3 text-xl font-semibold">Learning Goals</h2>

        <p className="text-gray-600">
          This project is designed to strengthen core React concepts including
          component composition, state management, hooks, routing, API
          integration, TypeScript, performance optimization, and reusable UI
          design patterns.
        </p>
      </div>
    </div>
  );
};

export default About;
