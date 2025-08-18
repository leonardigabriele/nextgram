import { Modal } from "./modal";

// export const dynamic = "force-dynamic";

export default async function PhotoModal({ params }: { params: Promise<{ id: string }> }) {
  const photoId = (await params).id;
  return <Modal>{photoId}</Modal>;
}
