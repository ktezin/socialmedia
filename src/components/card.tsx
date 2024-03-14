export default function Card({
	children,
	className,
}: {
	children: React.ReactNode;
	className: string;
}) {
	const classNames = `flex flex-col justify-center border rounded-md p-6 my-2 backdrop-blur-sm bg-white hover:bg-white/20 ${className}`;
	return <div className={classNames}>{children}</div>;
}
