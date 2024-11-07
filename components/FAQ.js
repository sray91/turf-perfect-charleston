const FAQ = () => (
    <section className="bg-green-900 text-white py-16">
      <h2 className="text-3xl font-bold text-center mb-8">FAQs</h2>
      <div className="max-w-4xl mx-auto space-y-4">
        {[
          'What is artificial grass face weight?',
          'How do you install artificial grass?',
          'Which artificial grass is best?',
          'Is artificial grass bad for the environment?',
          'Is artificial grass toxic?',
          'How much does artificial grass cost?',
          'What is the best artificial grass for pets?',
          'Is artificial grass better than natural grass?',
          'How do you clean artificial grass?',
          'Can artificial grass be installed on concrete?'
        ].map((question, index) => (
          <div key={index} className="border-b border-gray-600 py-2">
            <button className="w-full text-left font-bold">{question}</button>
          </div>
        ))}
      </div>
    </section>
  );
  
  export default FAQ;  