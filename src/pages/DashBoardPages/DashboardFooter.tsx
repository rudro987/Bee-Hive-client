const DashboardFooter = () => {
  return (
    <footer className="footer footer-center bg-base-300 text-base-content p-4">
      <aside>
        <p>
          Copyright © <span className="text-primaryFont">{new Date().getFullYear()} </span>- All right reserved by <span className="text-secondaryColor">Bee-Hive</span>
        </p>
      </aside>
    </footer>
  );
};

export default DashboardFooter;
