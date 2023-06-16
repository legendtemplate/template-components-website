import Link from "next/link";

export default function page() {
    return (
        <>
            <Link href='/'>
                <div className="w-4/12 relative">
                    <div className="rounded-lg ">
                        <img
                            className="h-60 w-full object-cover"
                            src='/author.jpg'
                            alt='Hello'
                            title='Hello'
                        />
                    </div>
                    <div className="btn absolute top-2 -right-2">
                        <button className="bg-gray-700 text-white rounded-full h-12 w-12">45</button>
                    </div>
                    <div className="head bg-gray-800 p-4">
                        <h2 className="text-xl font-semibold text-white py-3">Lorem ipsum dolor sit amet.</h2>
                        <p className="text-base font-medium text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. At veniam perspiciatis maiores corporis accusamus possimus dolores suscipit, dolorem vel magni voluptate! Accusantium veritatis deserunt dolorum ipsam eos dignissimos repudiandae magnam?</p>
                    <div className="tag mt-3">
                        <ul className="flex gap-4 items-center flex-wrap">
                            <li className="bg-red-400 text-white rounded px-2 py-1">Hello 1</li>
                            <li className="bg-red-400 text-white rounded px-2 py-1">Hello 2</li>
                            <li className="bg-red-400 text-white rounded px-2 py-1">Hello 3</li>
                            <li className="bg-red-400 text-white rounded px-2 py-1">Hello 4</li>
                            <li className="bg-red-400 text-white rounded px-2 py-1">Hello 5</li>
                            <li className="bg-red-400 text-white rounded px-2 py-1">Hello 6</li>
                        </ul>
                    </div>
                    </div>
                </div>
            </Link>
        </>
    );
}