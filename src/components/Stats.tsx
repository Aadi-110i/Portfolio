export const Stats = () => {
  return (
    <section className="w-full py-20 bg-zinc-900 text-white px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">The dream team for founders who move fast and ship smart.</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
          <div>
            <p className="text-4xl md:text-5xl font-bold text-white">10+</p>
            <p className="text-gray-400 mt-2">Projects Shipped</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-bold text-white">15+</p>
            <p className="text-gray-400 mt-2">Technologies</p>
          </div>
        </div>
      </div>
    </section>
  );
};
