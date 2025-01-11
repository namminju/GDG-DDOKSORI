import React, { useState } from 'react';
import styles from './DetailPage.module.css';
import Button from '../../../components/common/button/button';
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaRegTimesCircle, FaArrowCircleUp } from "react-icons/fa";
import BackButton from '../../../components/common/backbutton/backbutton';
import { PiCrownSimpleFill } from "react-icons/pi";
import NickName from '../../../components/common/button/nickname';

const DetailPage = () => {
  const [comment, setComment] = useState(""); // 댓글 상태
  const [comments, setComments] = useState([]); // 댓글 목록 상태
  const userName = "사용자 이름"; // 사용자 이름 (추후에는 실제 로그인한 사용자 이름으로 처리 가능)
  const [isMine, setIsMine] = useState(false);
  const [isResult, setIsResult] = useState(false);
  const [isAchieve, setIsAchieve] = useState(true);

  // 댓글 입력 시 상태 업데이트
  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  // 댓글 제출 시 댓글 목록에 추가
  const handleCommentSubmit = () => {
    if (comment.trim()) {
      setComments([...comments, { userName, comment }]);
      setComment(""); // 입력 필드 초기화
    }
  };

  return (
    <div className={styles.container}>
        <div className={styles.titleContainer}>
        <BackButton/>
            <div className={styles.title}>
                {isMine ? "내 버킷노트" : "길동 버킷노트"}
            </div>
        </div>
        {isMine ? <NickName /> : null }
        <div className={styles.context}>
            선택한 목표의 세부사항을 확인해 보세요!
        </div>
        <div className={styles.goal}>
            <PiCrownSimpleFill color="#FFDD00" style={{margin:"auto 0"}}/>
            <div>삐약톤 수상하기</div>
        </div>
        {isResult?
        <div className={styles.voteContainer}>
            <div>
                {isAchieve ? "해당 목표를 성공했어요!" : "해당 목표를 실패했어요ㅠ"}
                <br/>
                정답을 맞춘 사람들을 소개합니다.
            </div>
            <hr/>
            <div className={styles.winnerContainer}>
                <div>영희</div>
                <div>철수</div>
                <div>영구</div>
                <div>하나</div>
            </div>
        </div>:
        <div className={styles.voteContainer}>
            <div>
                {isMine ? "이 목표를 달성했는지 체크하세요!" : "이 아이가 목표를 달성할 수 있을까요?"}
            </div>
            <div className={styles.voteButtonContainer}>
                <div className={styles.voteButton}>
                    <FaRegCircleCheck size={"clamp(60px, 10vw, 76px)"} color='#0022FF'/>
                </div>
                <div className={styles.voteButton} >
                    <FaRegTimesCircle size={"clamp(60px, 10vw, 76px)"} color='#FF0000'/>
                </div>
            </div>
        </div>}
        <div className={styles.commentsContainer}>
            <div className={styles.inputField}>
                <input 
                    type="text" 
                    placeholder="응원 댓글 남기기" 
                    className={styles.input} 
                    value={comment} 
                    onChange={handleCommentChange} // 입력 값 변경 처리
                />
                <div className={styles.sendbtn}>
                <FaArrowCircleUp 
                    className={styles.icon} 
                    color='black' 
                    onClick={handleCommentSubmit} // 댓글 제출 처리
                />
                </div>
            </div>
            <hr style={{ borderColor: "#B7B7B7", borderWidth: "1px", borderStyle: "solid" }} />

            <div className={styles.commentsListContainer}>
                {comments.length > 0 ? (
                    comments.map((item, index) => (
                        <div className={styles.commentsList}>
                            <div key={index} style={{textAlign: "right"}}>
                                {item.userName}
                            </div>
                            <div key={index} style={{textAlign: "center"}}>
                                |
                            </div>
                            <div key={index} style={{textAlign: "left"}}>
                                {item.comment}
                            </div>
                        </div>
                    ))
                ) : (
                    <div style={{ margin:"20% 0"}}>댓글을 등록해 주세요!</div>
                )}
            </div>
        </div>
       
    </div>
  );
}

export default DetailPage;
