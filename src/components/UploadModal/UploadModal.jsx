import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faUpload, faVideo, faImage } from '@fortawesome/free-solid-svg-icons';
import './UploadModal.css';

const UploadModal = ({ isOpen, onClose }) => {
  const [uploadStep, setUploadStep] = useState(1);
  const [videoFile, setVideoFile] = useState(null);
  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [videoDetails, setVideoDetails] = useState({
    title: '',
    description: '',
    category: 'Recipes'
  });

  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setVideoFile(file);
      setUploadStep(2);
    }
  };

  const handleThumbnailUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setThumbnailFile(file);
    }
  };

  const handleInputChange = (e) => {
    setVideoDetails({
      ...videoDetails,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    // Handle video upload logic here
    console.log('Uploading video:', { videoFile, thumbnailFile, videoDetails });
    alert('Video uploaded successfully!');
    onClose();
  };

  const resetModal = () => {
    setUploadStep(1);
    setVideoFile(null);
    setThumbnailFile(null);
    setVideoDetails({
      title: '',
      description: '',
      category: 'Recipes'
    });
  };

  const handleClose = () => {
    resetModal();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="upload-modal-overlay">
      <div className="upload-modal">
        <div className="upload-modal-header">
          <h2>Upload Video</h2>
          <button className="close-button" onClick={handleClose}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        <div className="upload-modal-content">
          {uploadStep === 1 && (
            <div className="upload-step">
              <div className="upload-area">
                <FontAwesomeIcon icon={faVideo} className="upload-icon" />
                <h3>Upload Your Video</h3>
                <p>Choose a video file to upload</p>
                <input
                  type="file"
                  accept="video/*"
                  onChange={handleVideoUpload}
                  className="file-input"
                  id="video-upload"
                />
                <label htmlFor="video-upload" className="upload-button">
                  <FontAwesomeIcon icon={faUpload} />
                  Select Video File
                </label>
              </div>
            </div>
          )}

          {uploadStep === 2 && (
            <div className="upload-step">
              <div className="upload-progress">
                <h3>Video Uploaded Successfully!</h3>
                <p>Now add details for your video</p>
              </div>

              <div className="video-details-form">
                <div className="form-group">
                  <label>Video Title</label>
                  <input
                    type="text"
                    name="title"
                    value={videoDetails.title}
                    onChange={handleInputChange}
                    placeholder="Enter video title"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label>Description</label>
                  <textarea
                    name="description"
                    value={videoDetails.description}
                    onChange={handleInputChange}
                    placeholder="Describe your video"
                    className="form-textarea"
                    rows="3"
                  />
                </div>

                <div className="form-group">
                  <label>Category</label>
                  <select
                    name="category"
                    value={videoDetails.category}
                    onChange={handleInputChange}
                    className="form-select"
                  >
                    <option value="Recipes">Recipes</option>
                    <option value="Reviews">Reviews</option>
                    <option value="Travel">Travel</option>
                    <option value="Culture">Culture</option>
                    <option value="Trending">Trending</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Thumbnail</label>
                  <div className="thumbnail-upload">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleThumbnailUpload}
                      className="file-input"
                      id="thumbnail-upload"
                    />
                    <label htmlFor="thumbnail-upload" className="thumbnail-button">
                      <FontAwesomeIcon icon={faImage} />
                      {thumbnailFile ? 'Change Thumbnail' : 'Upload Thumbnail'}
                    </label>
                    {thumbnailFile && (
                      <span className="file-name">{thumbnailFile.name}</span>
                    )}
                  </div>
                </div>
              </div>

              <div className="upload-actions">
                <button className="cancel-button" onClick={handleClose}>
                  Cancel
                </button>
                <button className="submit-button" onClick={handleSubmit}>
                  Upload Video
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UploadModal;
