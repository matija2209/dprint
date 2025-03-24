import Image from "next/image";
import Link from "next/link";

export function FacebookPage() {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
            <div className="flex items-center space-x-4 mb-4">
                <div className="relative w-16 h-16">
                    <Image
                        src="/logo.jpg"
                        alt="D Print Logo"
                        fill
                        className="rounded-full object-cover"
                    />
                </div>
                <div>
                    <h3 className="text-xl font-bold">D Print</h3>
                    <div className="text-gray-600 text-sm flex items-center">
                        <span className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                            </svg>
                            114 všečkov
                        </span>
                        <span className="mx-2">•</span>
                        <span>273 sledilcev</span>
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                <p className="text-gray-700">
                    Sledite nam na Facebooku in bodite obveščeni o vseh naših novostih, akcijah in posebnih ponudbah!
                </p>

                <Link
                    href="https://www.facebook.com/profile.php?id=61550341067381&sk=photos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-[#1877F2] text-white text-center py-3 px-4 rounded-lg font-semibold hover:bg-[#166FE5] transition-colors duration-200 flex items-center justify-center gap-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    Sledite nam na Facebooku
                </Link>
            </div>
        </div>
    );
} 