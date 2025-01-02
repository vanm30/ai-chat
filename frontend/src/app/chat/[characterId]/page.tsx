import ChatUI from "./chat";
import BackButton from "@/components/BackButton";

export default function ChatPage({ params }: { params: { characterId: string } }) {
    const predefinedCharacters = [
        { id: "1", name: "Character One" },
        { id: "2", name: "Character Two" },
    ];

    const character = predefinedCharacters.find(c => c.id === params.characterId);

    if (!character) {
        return <div>Character not found</div>;
    }

    // SSR renders the initial content
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-2xl">{`Chat with ${character.name}`}</h1>
            <ChatUI />
            <BackButton />
        </div>
    );
}