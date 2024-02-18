import { FormLabel, Select } from "@chakra-ui/react";

export default function PostCreateDescription() {
  return (
    <div>
      <FormLabel>Description</FormLabel>
      <Select placeholder="Select Description">
        <option value="">No tag</option>
        <option value="NSFW">NSFW</option>
        <option value="Movie">Movie</option>
        <option value="Video">Video</option>
        <option value="Animation">Animation</option>
        <option value="Tutorial">Tutorial</option>
        <option value="Bodcast">Bodcast</option>
        <option value="Music">Music</option>
        <option value="Sound">Sound</option>
        <option value="Voice">Voice</option>
        <option value="Art picture">Art picture</option>
        <option value="Photo">Photo</option>
        <option value="Story">Story</option>
        <option value="Announcement">Announcement</option>
        <option value="Guide">Guide</option>
        <option value="Link">Link</option>
        <option value="Place">Place</option>
        <option value="Challenge">Challenge</option>
      </Select>
    </div>
  );
}
