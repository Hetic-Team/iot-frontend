const CopyrightNotice: React.FC = () => {
    return (
        <footer className="py-2 text-center" style={{ fontSize: '14px', color: 'gray' }}>
            © {new Date().getFullYear()} Smart’Creche. All Rights Reserved. Made with love by HETIC students!
        </footer>
    );
};

export default CopyrightNotice;
