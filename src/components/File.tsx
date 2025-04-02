'use client';

export default function FileBar({
	name,
	className,
	type,
	size,
}: {
	name: string;
	className: string;
	type: 'dir' | 'file';
    size: string
}) {


    return (
        <div className={'flex w-full rounded-sm justify-between' + ' ' + className}>
            <div>
                 <h1> {name} </h1>
            </div>
            <div className="flex gap-1 w-[130px] justify-between">
                { type === 'file' ? <p> {size} </p> : <div></div>}
                <div>
                    <button> {type === 'dir' ? 'Open' : 'Download'} </button>
                </div>
            </div>
        </div>
    )

}
