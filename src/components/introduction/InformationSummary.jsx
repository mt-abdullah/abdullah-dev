// src/components/introduction/InformationSummary.jsx

const InformationSummary = ({ item }) => {
  return (
    // 1. The background color is now a semi-transparent version of your primary blue.
    // 2. Added a subtle border and hover effect for a more polished feel.
    <div
      className="p-4 rounded-lg text-center bg-picto-primary/5 border border-picto-primary/10 
                 hover:bg-picto-primary/10 transition-colors duration-300"
    >
      <p className="text-2xl sm:text-3xl font-bold text-picto-primary">
        {item.description}
      </p>
      <p className="text-xs sm:text-sm font-medium text-soft-dark mt-1">
        {item.title}
      </p>
    </div>
  );
};

export default InformationSummary;