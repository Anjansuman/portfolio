import Image from "next/image";

export default function Title() {
    return (
        <div className="w-full flex items-center justify-between">
            <div className={`text-white text-3xl `}>
                anjan
            </div>
            <Image
                src={'/images/profile.jpeg'}
                alt={'profile'}
                width={'100'}
                height={'100'}
                className="rounded-full border border-neutral-500"
            />
        </div>
    );
}